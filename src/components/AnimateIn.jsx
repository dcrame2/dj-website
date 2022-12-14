/**
 * Component coming soon. the idea on this one...
 * create an animate trigger that can grab the selected element
 * and then place an animation on it via props
 * will contain on scroll functionality using the same logic as
 * the slideoutlink.... todo: seperate the logic/UI from the slideoutlink
 */

import styled from 'styled-components';

const Container = styled.div``;

export default function AnimateIn({ ...props }) {
    console.log(props.scrollY);

    return <Container>AnimateIn</Container>;
}
