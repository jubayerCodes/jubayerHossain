import AnchorLink from "react-anchor-link-smooth-scroll";

const ActiveLink = ({ children, href, className }) => {


    return (
        <AnchorLink href={href} className={`${className}`}>
            {children}
        </AnchorLink>
    );
};

export default ActiveLink;