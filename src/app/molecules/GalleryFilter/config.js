
export const fields = {
  sections: ['hot', 'top', 'user'],
  items: ['day', 'week', 'month', 'year', 'all'],
  sorts: [
    { available:true, value: 'viral'},
    { available:true, value: 'top'},
    { available:true, value: 'time'},
    { available:true, value: 'rising'}
  ]
}

export const initialValues = {
    viral: false, 
    limit: 'top', 
    section: 'hot', 
    sort: 'top',
    page: 0
}