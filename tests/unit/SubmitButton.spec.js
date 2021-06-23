import { mount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'

const msg = "submit"
const factory = (props) => {
  return mount(SubmitButton, {
    props: {
      msg,
      ...props
    }
  })
}

describe('SubmitButton', () => {
  it('displays a non authorized message', () => {
    const wrapper = factory()

    expect(wrapper.find("span").text()).toBe("Not Authorized")
    expect(wrapper.find("button").text()).toBe("submit")
  })

  it('displays an authorized message', () => {
    const wrapper = factory({ isAdmin: true })

    expect(wrapper.find("span").text()).toBe("Admin Privileges")
    expect(wrapper.find("button").text()).toBe("submit")
  })
})