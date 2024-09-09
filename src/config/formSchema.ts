import CheckboxGroup from '@/components/CheckboxGroup.vue'
import DropDown from '@/components/DropDown.vue'
import TelephoneNumber from '@/components/TelephoneNumber.vue'
import Text from '@/components/Text.vue'
import TextInput from '@/components/TextInput.vue'

export const formSchema = [
  {
    fieldType: TextInput,
    name: 'fullName',
    label: 'Full Name',
    required: true
  },
  {
    fieldType: TelephoneNumber,
    name: 'telephoneNumber',
    label: 'Phone',
    required: false
  },
  {
    fieldType: DropDown,
    name: 'intrest',
    label: 'Interest',
    required: true,
    options: [
                "Mountains",
                "Oceans",
                "Deserts",
            ]
  },
  {
      fieldType: Text,
      name: 'description',
      label: 'Description',
      required: false,
  },
  {
      fieldType: CheckboxGroup,
      name: 'travel',
      label: 'Travel',
      required: true,
      options: [
          "Car",
          "Bus",
          "Train",
      ]
  }
]
