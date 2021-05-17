//creating one object for data retrieval
import db from './firebase.config.js'


export const positions = [
  {
    'humidity': '12',
    'moisture': 'Li',
    'temperatureC': 'string',
    'temperatureF': 'string'

  },
  

];
var DataRef = db.ref('info/-MYuBw5z3ScToOBOLlz0');
