import { withRouter } from 'react-router';
import { inject , observer } from 'mobx-react'
export function baseInject(components){
  return withRouter(inject(stores=>stores)(observer(components)));
}