import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  selectCustomerProdList,getDataAsync,delDataAsync } from './customerSlice';
// import {getDataAsync,delDataAsync} from './cartSlice';
// import {  selectCartList } from './cartSlice';

// import styles from './Counter.module.css';

export function Cart() {
  const prodList = useSelector(selectCustomerProdList);
  // prodList name can be changed
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getDataAsync());
  },[]);


  return (
    <div>
      Cart GUI

      {prodList.map((prod) => (
        <div>
          Desc: {prod.desc} {", "} Price: {prod.price}
          <button onClick={() => dispatch(delDataAsync(prod.id))}>
            Remove
          </button>

        </div>
      ))}

    </div>
  );
}
