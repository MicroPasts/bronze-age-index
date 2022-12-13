import React from "react"
import {Card, Col,CardImg} from 'react-bootstrap';
import {Link} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image";
const ProjectCard = ({post}) => (
    <Col md={4} className="mb-3">
        <Card className="border-0 bg-light">

            <Card.Body className="bg-white border-0 rounded-0">
                {post.thumbnail !== null &&
                    <CardImg className="card-img-top rounded-0"
                             as={GatsbyImage} image={getImage(post.cover)} alt={post.frontmatter.title}/>
                }
                {post.thumbnail === null && <Card.Img src={'/img.png'} alt="Card image" width={300} height={300}/>}
                <div className="h-100" style={{minHeight: 70}}>
                    <Link to={'/projects/' + post.frontmatter.slug} className="stretched-link stretched-link__blog_post">
                        <h1 className="lead text-black fw-bold mt-3">{post.frontmatter.title}</h1>
                    </Link>
                </div>

            </Card.Body>
        </Card>
    </Col>
)

export default ProjectCard