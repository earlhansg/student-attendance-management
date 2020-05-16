export const studentFormData = {
  idNumber: { label: 'ID', value: '', type: 'number', validators: { required: true, min: 8 } },
  firstname: { label: 'Firstname', value: '', type: 'text', validators: { required: true }  },
  lastname: { label: 'Lastname', value: '', type: 'text', validators: { required: true } },
  gender: {
    label: 'Gender',
    value: 'M',
    type: 'select',
    options: [
      {
        label: 'Male', value: 'M'
      },
      {
        label: 'Female', value: 'F'
      }
    ],
  },
  section: {
    label: 'Section',
    value: 1,
    type: 'select',
    options: [
      {
        label: 'Rizal', value: 1
      },
      {
        label: 'Bonifacio', value: 2
      }
    ]
  }
};


