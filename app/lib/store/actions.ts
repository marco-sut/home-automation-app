export enum ActionTypes {
  Action = 'action',
}

export const actions = {
  action(context: any, payload: any) {
    context.commit(ActionTypes.Action, payload);
  }
};
