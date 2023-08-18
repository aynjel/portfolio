import { Container } from "reactstrap"

function NotFound() {
    return (
        <>
            <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
                <h1 className="text-warning fw-bold fs-1">
                    404
                </h1>
                <p className="text-secondary">
                    Page Not Found
                </p>
            </Container>
        </>
    )
}

export default NotFound