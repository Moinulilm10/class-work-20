import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className=" project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", marginBottom: "20px" }}>
          {props.description}
        </Card.Text>
        <div className="flex flex-row justify-center">
          <Button
            className="flex flex-row gap-2 w-28"
            variant="primary"
            href={props.ghLink}
            target="_blank"
          >
            <BsGithub className="mt-1" /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}
          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
          {!props.isBlog && props.demoLink && (
            <Button
              className="flex flex-row gap-2 w-28"
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite className="mt-1" /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
