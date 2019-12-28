// Credit: Amelia Wattenberger (github.com/wattenberger)

import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import "./style.scss";

const Link = ({
  to,
  buttonProps,
  isButton,
  doOpenInNewTab,
  className,
  children,
  ...props 
}) => {
  const isExternal = !to || !to.startsWith("/")

  if (isExternal) return (
    <OutboundLink
      className={className}
      href={to}
      target={doOpenInNewTab ? "_blank" : ""}
      rel={doOpenInNewTab ? "noreferrer noopener" : ""}
      {...props}>
      <LinkChildren
        {...{ buttonProps, isButton, children }}
      />
    </OutboundLink>
  )

  return (
    <GatsbyLink to={to} className={className} {...props}>
      <LinkChildren
          {...{ buttonProps, isButton, children }}
      />
    </GatsbyLink>
  )
};

Link.propTypes = {
  to: PropTypes.string,
  buttonProps: PropTypes.object,
  isButton: PropTypes.bool,
  doOpenInNewTab: PropTypes.bool,
};

Link.defaultProps = {
  buttonProps: {},
  isButton: false,
  doOpenInNewTab: false,
};

export default Link;

const LinkChildren = ({ buttonProps, isButton, children }) => (
  isButton ? (
    <Button {...buttonProps}>{children}</Button>
  ) : (children)
);