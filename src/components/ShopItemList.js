import '../styles/App.css'

const TodoList = ({ shopItems,increment,decrement }) => {

    return (
        <div className='lists'>
            {shopItems.map((item, index) => {
                return (
                    <div key={index} className='shopItem'>
                        <div>{item.text}</div>
                        <div className='quantity'>
                            <button onClick={()=>decrement(index)}>-</button>
                            <div className='num'>{item.quantity}</div>
                            <button onClick={()=>increment(index)}>+</button>
                        </div>

                    </div>
                )

            })}
        </div>

    )
}

export default TodoList;