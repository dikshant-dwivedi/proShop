import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Product from "../components/Product"
import { Row, Col } from "react-bootstrap"
import { listProducts } from "../actions/productActions"
import Message from "../components/Message"
import Loader from "../components/Loader"
import Paginate from "../components/Paginate"
import ProductCarousel from "../components/ProductCarousel"

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword
  const dispatch = useDispatch()
  const pageNumber = match.params.pageNumber || 1
  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>
          <Loader />
        </h2>
      ) : error ? (
        <h3>
          <Message variant='danger'>{error}</Message>
        </h3>
      ) : (
        <>
          {!keyword && <ProductCarousel />}
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xlg={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </Row>
        </>
      )}
    </div>
  )
}

export default HomeScreen
