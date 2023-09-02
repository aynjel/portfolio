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
                <h1>Comming Soon...</h1>
                <p>Sorry, this page is under construction.</p>
            </Component>
        </>
    )
}

export default NotFound