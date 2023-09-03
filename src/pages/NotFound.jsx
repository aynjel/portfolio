import styled from "styled-components"

const Component = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

function NotFound() {
    return (
        <>
            <Component>
                <h1 className="text-center">404</h1>
                <h2 className="text-center">Page Not Found</h2>
            </Component>
        </>
    )
}

export default NotFound