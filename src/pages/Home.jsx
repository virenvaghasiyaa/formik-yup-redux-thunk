import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../features/postsSlices";
import { Button, Table } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state?.posts?.posts);

  console.log("posts", posts);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <>
      <Button
        variant="secondary"
        // onClick={handleFilterModalShow}
      >
        Filter
      </Button>
      <Button
        variant="primary"
        // onClick={handleShowModal}
      >
        Add Product
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>userId</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts?.length !== 0 ? (
            posts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.userId}</td>
                <td>{product.title}</td>
                <td>{product.body}</td>
                <td>
                  <Button
                    variant="primary"
                    className="me-2"
                    // onClick={() => handleEdit(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    // onClick={() => handleDelete(product.sku_id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8}>No data found!</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
