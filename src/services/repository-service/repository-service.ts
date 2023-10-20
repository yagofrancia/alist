import Realm from 'realm';

const NodeAccount: Realm.ObjectSchema = {
  name: 'NodeAccount',
  properties: {
    id: 'string',
    data: 'string',
  },
  primaryKey: 'id',
};

export function getRealm() {
  return new Realm({path: 'database', schema: [NodeAccount]});
}
