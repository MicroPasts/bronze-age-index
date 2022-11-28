import React from "react"
import {Card, Col,CardImg} from 'react-bootstrap';
import {Link} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const PostCard = ({post}) => (
    <Col md={4} className="mb-3">
        <Card className="border-0 bg-light">

            <Card.Body className="bg-white border-0 rounded-0">
                {post.thumbnail !== undefined && <CardImg className="card-img-top rounded-0"
                         as={GatsbyImage} image={getImage(post.thumbnail)} alt={"Object image"}/>}
                {post.thumbnail === null && <Card.Img src={'/img.png'} alt="Card image" />}
                <div className="h-100" style={{minHeight: 70}}>
                    <Link to={'/records/' + post.objectID} className="stretched-link stretched-link__blog_post">
                        <h1 className="lead text-black fw-bold">{post.objectType}</h1>
                    </Link>
                        <h2 className="lead">{post.objectID.toUpperCase()}</h2>
                </div>

            </Card.Body>
        </Card>
    </Col>
)

export default PostCard