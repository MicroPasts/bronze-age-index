import React from "react"
import {Card, Col,CardImg} from 'react-bootstrap';
import {Link} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const TeamCard = ({post}) => (
    <Col md={4} className="mb-3">
        <Card className="border-0 bg-light">
            <Card.Body className="bg-white border-0 rounded-0">
                {post.frontmatter.image !== undefined && <CardImg className="card-img-top rounded-circle"
                         as={GatsbyImage} image={getImage(post.frontmatter.image)} alt={"Object image"}/>}
                {post.frontmatter.image === null && <Card.Img src={'/img.png'} alt="Card image" className={"rounded-circle"} />}
                <div className="h-100 mt-2" style={{minHeight: 70}}>
                    <Link to={post.frontmatter.slug} className="stretched-link stretched-link__blog_post">
                        <h1 className="lead text-black fw-bold">{post.frontmatter.title} {post.frontmatter.name}</h1>
                    </Link>
                        <h2 className="lead">{post.frontmatter.institution}</h2>
                </div>

            </Card.Body>
        </Card>
    </Col>
)

export default TeamCard