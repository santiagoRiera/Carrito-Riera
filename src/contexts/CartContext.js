import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const addItem = (item, quantity) => {
        if (isInCart(item)) {
            products.map(prod => {
                if (prod.id === item.id){
                    return prod.quantity += quantity
                }
            })
        }else{
            setProducts(state => {
                return[...state, {...item, quantity: quantity}]
            })
        }
    }

    const removeItem = (id) => {
        const newCart = products.filter(cartItem => cartItem.id !== id)
        setProducts(newCart)
    }

    function clear() {
        setProducts([])
    }

    const isInCart = (item) => {
        return (products?.find(elem => elem.id === item.id) != null)
    }
    const totalItems = () => products.reduce((acum, items) => acum + items.quantity, 0)
    const totalPrice = () => products.reduce((acum, items) => acum + (items.price * items.quantity), 0)

    return(
        <CartContext.Provider value={{addItem, removeItem, clear, products, totalItems, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
} 

export default CartProvider