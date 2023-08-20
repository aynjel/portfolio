import { Container } from "reactstrap"

function NotFound() {
    return (
        <>
            <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
                <h1 className="text-warning fw-bold fs-1">
                    404
                </h1>
                <p className="text-warning fw-bold fs-3">
                    Page not found
                </p>
            </Container>
        </>
    )
}

export default NotFound