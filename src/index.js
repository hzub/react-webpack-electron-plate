import React from 'react';
import ReactDOM from 'react-dom';

import { TestComp } from 'components/testComp/testComp';

import './index.scss';

const electronApp = ELECTRON ? require('electron') : null;

window.globb = [];

if (electronApp) {
  const sqlite = electronApp.remote.require('sqlite3').verbose();
  const appDir = electronApp.remote.app.getPath('userData');
  console.info('appDir', appDir);
  const db = new sqlite.Database(appDir + '/tst.db', () => {
    db.run('CREATE TABLE IF NOT EXISTS lorem (info TEXT)', () => {
      const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
      for (let i = 0; i < 10; i += 1) {
        stmt.run('Ipsum zyx ' + i);
      }
      stmt.finalize(() => {
        db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
          window.globb.push(row.info);
          window.console.log(row.id + ': ' + row.info);
        });

        db.close();
      });
    });
  });
} else {
  window.console.info('not electron');
}

ReactDOM.render(<TestComp />, document.getElementById('root'));
