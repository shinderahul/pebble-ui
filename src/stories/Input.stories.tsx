import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Input>

export const Default: Story   = { args:{ label:'Email', placeholder:'you@example.com' } }
export const WithHint: Story  = { args:{ label:'Username', placeholder:'dev_123', hint:'Letters, numbers, underscores only.' } }
export const WithError: Story = { args:{ label:'Email', value:'bad', error:'Enter a valid email address.' } }
export const Disabled: Story  = { args:{ label:'Account ID', value:'ACC-8821', disabled:true } }