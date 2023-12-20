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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        product_id: 1,
        product_title: title,
        description,
        category,
        price,
        seller: username,
        image_link,
      })
    );
    handleClose();
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
              <button type='submit'>Post</button>
              <button onClick={handleClose}>Close</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
