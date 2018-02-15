// @flow

import React from 'react';
import { contact } from '../../config';

const EmailUsLink = (props) => (<a {...props} href={`mailto:${contact.email}`} />);

EmailUsLink.defaultProps = {
  children: contact.email
};

export default EmailUsLink;
