import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('little_lemon_db');

export async function createTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'create table if not exists menuitems (id integer primary key not null, uuid text, title text, price text, category text, image text);'
        );
      },
      reject,
      resolve
    );
  });
}

export async function getMenuItems() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql('select * from menuitems', [], (_, { rows }) => {
        resolve(rows._array);
      });
    });
  });
}

export function saveMenuItems(menuItems) {
  db.transaction((tx) => {

    tx.executeSql(
      `insert into menuitems (uuid, title, price, category, image) values ${menuItems.map((item) =>
        `('${item.id}', '${item.name}', '${item.price}','${item.category}', '${item.image}')`).join(', ')}`
    )
  });
}

export async function filterByQueryAndCategories(query, activeCategories) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM menuitems WHERE title LIKE '%${query}%' AND category IN (${activeCategories.map((category) => `'${category}'`).join(', ')})`,
        [],
        (_, { rows }) => {
          resolve(rows._array);
        }
      );
    });
  });
}
