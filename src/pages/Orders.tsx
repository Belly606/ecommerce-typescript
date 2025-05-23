import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetOrders, resetOrderStatus } from "@store/orders/ordersSlice";
import { Loading } from "@components/feedback";
import { Heading } from "@components/common";
import { Table, Modal } from "react-bootstrap";
import { TProduct } from "@types";
import { ProductInfo } from "@components/eCommerce";

const Orders = () => {
  const dispatch = useAppDispatch();

  const { loading, error, ordersList } = useAppSelector(
    (state) => state.orders
  );

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TProduct[]>([]);

  const closeModalHandler = () => {
    setShowModal(false);
    setSelectedProduct([]);
  };

  const viewDetailsHandler = (id: number) => {
    const productDetails = ordersList.find((order) => order.id === id);
    const newItems = productDetails?.items ?? [];

    setShowModal(true);
    setSelectedProduct((prev) => [...prev, ...newItems]);
  };

  useEffect(() => {
    const promise = dispatch(actGetOrders());

    return () => {
      promise.abort();
      dispatch(resetOrderStatus());
    };
  }, [dispatch]);
  return (
    <>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct.map((el) => (
            <ProductInfo
              key={el.id}
              title={el.title}
              price={el.price}
              quantity={el.quantity}
              img={el.img}
              direction="column"
              style={{ marginBottom: "10px" }}
            />
          ))}
        </Modal.Body>
      </Modal>

      <Heading title="My orders" />
      <Loading status={loading} error={error} type="category">
        <Table striped bordered>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {ordersList.map((el) => (
              <tr key={el.id}>
                <td>#{el.id}</td>
                <td>
                  {el.items.length} item(s) {" / "}{" "}
                  <span
                    onClick={() => {
                      viewDetailsHandler(el.id);
                    }}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Product Details
                  </span>
                </td>
                <td>{el.subtotal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Loading>
    </>
  );
};

export default Orders;
