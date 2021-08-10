import * as api from './api';

api.getCategories().then((categories) => { console.log(categories); });
