export const Basket = ({cart}) => {
    return <div className="col-md-5">
        <h3>items: {cart.length}</h3>
        <table className="table table-dark table-bordered">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>
        </table>
    </div>
}