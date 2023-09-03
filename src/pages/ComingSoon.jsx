import styled from "styled-components"

const Component = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        font-size: 3rem;
        font-weight: 700;
        color: var(--primary-color);
    }
    p{
        font-size: 2rem;
        font-weight: 500;
        color: var(--text-color);
    }
`

function ComingSoon() {
    return (
        <>
            <Component>
                <h1>Coming Soon</h1>
                <p>Under Construction</p>
            </Component>
        </>
    )
}

export default ComingSoon