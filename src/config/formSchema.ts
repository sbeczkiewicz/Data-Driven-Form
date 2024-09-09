import DropDown from '@/components/DropDown.vue'
import TelephoneNumber from '@/components/TelephoneNumber.vue'
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
    name: 'dropDown',
    label: 'Interest',
    required: true,
    options: [
                "Mountains",
                "Oceans",
                "Deserts",
            ]
  }
  // {
  //     fieldType: InputType.TEXT,
  //     label: 'Description',
  // },
  // {
  //     fieldType: InputType.CHECK_BOX_GROUP,
  //     label: 'Travel',
  //     options: [
  //         "Car",
  //         "Bus",
  //         "Train",
  //     ]
  // }
]
