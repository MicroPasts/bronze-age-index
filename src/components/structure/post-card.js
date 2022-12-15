import React from "react"
import {Card, Col,CardImg} from 'react-bootstrap';
import {Link} from "gatsby"

const PostCard = ({post}) => (
    <Col md={3} className="mb-3">
        <Card className="border-0 bg-light">

            <Card.Body className="bg-white border-0 rounded-0">
                {post.thumbnail !== null &&
                    <CardImg className="card-img-top rounded-0 square" src={post.thumbnail.publicURL}  alt={"Object image"} width={150} height={150}/>
                }
                {post.thumbnail === null && <Card.Img src={'/img.png'} alt="Card image" width={150} height={150}/>}
                <div className="h-100" style={{minHeight: 70}}>
                    <Link to={'/records/' + post.objectID} className="stretched-link stretched-link__blog_post">
                        <h1 className="lead text-black fw-bold mt-3">{post.objectType}</h1>
                    </Link>
                        <h2 className="lead">{post.objectID.toUpperCase()}</h2>
                </div>

            </Card.Body>
        </Card>
    </Col>
)

export default PostCard