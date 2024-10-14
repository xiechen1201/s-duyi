function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock('div', _hoisted_1, [
      _createVNode(
        $setup['CardComponent'],
        { 'data-v-inspector': 'src/App.vue:3:5' },
        {
          header: _withCtx((slotProps) => [
            _createElementVNode(
              'div',
              _hoisted_2,
              '卡片标题，' + _toDisplayString(slotProps.title),
              1 /* TEXT */
            )
          ]),
          default: _withCtx(() => [
            _cache[0] ||
              (_cache[0] = _createElementVNode(
                'div',
                {
                  class: 'card-content',
                  'data-v-inspector': 'src/App.vue:10:7'
                },
                [
                  _createElementVNode('img', {
                    src: '/src/assets/logo.svg',
                    alt: 'Beautiful landscape',
                    class: 'card-image',
                    'data-v-inspector': 'src/App.vue:11:9'
                  }),
                  _createElementVNode(
                    'p',
                    { 'data-v-inspector': 'src/App.vue:12:9' },
                    '探索未知的自然风光，记录下每一个令人惊叹的瞬间。加入我们的旅程，一起见证世界的壮丽。'
                  )
                ],
                -1 /* HOISTED */
              )),
            _cache[1] ||
              (_cache[1] = _createElementVNode(
                'div',
                { 'data-v-inspector': 'src/App.vue:14:7' },
                [
                  _createElementVNode(
                    'button',
                    { 'data-v-inspector': 'src/App.vue:15:9' },
                    '了解更多'
                  )
                ],
                -1 /* HOISTED */
              ))
          ]),
          _: 1 /* STABLE */
        }
      )
    ])
  );
}
