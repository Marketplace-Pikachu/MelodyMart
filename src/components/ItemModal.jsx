import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../slices/itemsSlice';

const ItemModal = ({ isOpen, handleClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [image_link, setImageLink] = useState('');

  const id = useSelector((state) => state.user.userId);
  const username = useSelector((state) => state.user.name);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description,
          price,
          category,
          sold: false, 
          seller: username, 
          product_user_id: id, 
          image_link,
          entry_date: new Date().toISOString(), 
          product_title: title,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Product added successfully:', result);

      dispatch(addItem({
        id: result.id, 
        title,
        description,
        category,
        price,
        sold: false,
        seller: username,
        product_user_id: id,
        image_link,
        entry_date: new Date().toISOString(),
      }));

      handleClose();
  
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  if (!isOpen) return null;
  return (
    <div className='modal-background'>
      <div className='modal-content'>
        <div>
          <form
            action='submit'
            method='post'
            className='input-form'
            onSubmit={handleSubmit}
          >
            <span>
              <label htmlFor='title'>Product Title:</label>
              <input
                type='text'
                id='title'
                name='title'
                className='modal-input'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </span>
            <br></br>
            <span>
              <label htmlFor='description'>Description:</label>
              <textarea
                id='description'
                name='description'
                rows='4'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </span>
            <br></br>
            <span>
              <label htmlFor='category'>Category:</label>
              <select
                id='category'
                name='category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value=''>Select a category</option>
                <option value='Stringed'>Stringed</option>
                <option value='Brass'>Brass</option>
                <option value='Woodwind'>Woodwind</option>
                <option value='Percussion'>Percussion</option>
              </select>
            </span>
            <br></br>
            <span>
              <label htmlFor='image_link'>Image Link:</label>
              <input
                type='text'
                id='image_link'
                name='image_link'
                value={image_link}
                onChange={(e) => setImageLink(e.target.value)}
                required
              />
            </span>
            <br></br>
            <span>
              <label htmlFor='price'>Price:</label>
              <input
                type='number'
                id='price'
                name='price'
                step='0.01'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </span>
            <br></br>
            <span>
              <button type='submit' className='modal-button'>Post</button>
              <button onClick={handleClose} className='modal-button'>Close</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
