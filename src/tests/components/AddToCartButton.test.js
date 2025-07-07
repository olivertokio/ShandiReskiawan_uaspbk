// tests/components/AddToCartButton.test.js
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AddToCartButton from '@/components/AddToCartButton.vue'

describe('AddToCartButton', () => {
  it('emit event saat diklik', async () => {
    const wrapper = mount(AddToCartButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('add-to-cart')
  })
})
