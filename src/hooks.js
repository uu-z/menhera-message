export const Message = {
  _({ _, _key, _val }) {
    _.$use(_val);
  }
};

export const messages = {
  _({ _, _val }) {
    _.$use({ _hooks: { Message: _val } });
  }
};
