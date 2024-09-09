import TextInput from '@/components/TextInput.vue'

export const formSchema = [
  {
    fieldType: TextInput,
    name: 'fullName',
    label: 'Full Name',
    required: true,
  }
  // {
  //     fieldType: InputType.TELEPHONE_NUMBER,
  //     label: 'Phone',
  // },
  // {
  //     fieldType: InputType.DROP_DOWN,
  //     label: 'Interest',
  //     options: [
  //         "Mountains",
  //         "Oceans",
  //         "Deserts",
  //     ]
  // },
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
