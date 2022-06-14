import React from 'react'
import {useSelector,useDispatch} from  "react-redux"
import { ordered,restocked } from '../features/icecream/icecreamSlice'
const IceCreamView = () => {
  const numOfIceCream = useSelector((state) => state.icecream.numOfIcecreams )
  const dispatch = useDispatch();
  return (
    <div>
    <h2>Number of icreame - {numOfIceCream}</h2>
    <button onClick={() => dispatch(ordered())}>Order icreame</button>
    <button onClick={() => dispatch(restocked(2))}>Restock icreame</button>
</div>
  )
}

export default IceCreamView