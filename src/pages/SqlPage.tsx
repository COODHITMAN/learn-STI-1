import StudyPage from '../components/StudyPage';

const table = (head: string[], rows: Array<React.ReactNode[]>) => (
  <div className="table-wrap">
    <table className="sti-table">
      <thead><tr>{head.map((cell) => <th key={cell}>{cell}</th>)}</tr></thead>
      <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>
);

const code = (text: string) => <pre className="sql-block">{text}</pre>;

export default function SqlPage() {
  return (
    <StudyPage
      accent="#22c55e"
      glow="#22c55e38"
      badge="SQL · STI"
      title="SQL — Rappel"
      subtitle="Types de données, opérateurs, contraintes, DDL, DML et fonctions"
      toc={[
        { id: 'types', label: 'Types' },
        { id: 'operateurs', label: 'Opérateurs' },
        { id: 'logique', label: 'Logique' },
        { id: 'fonctions', label: 'Fonctions' },
        { id: 'contraintes', label: 'Contraintes' },
        { id: 'ddl', label: 'DDL' },
        { id: 'dml', label: 'DML' },
        { id: 'jointures', label: 'Jointures' },
      ]}
      sections={[
        {
          id: 'types',
          icon: '1',
          title: 'Types de données',
          content: table(['Type', 'Description'], [
            [<code>INT</code>, 'Entier positif ou négatif.'],
            [<code>DECIMAL</code>, 'Nombre décimal précis.'],
            [<code>CHAR(n)</code>, 'Chaîne de longueur fixe.'],
            [<code>VARCHAR(n)</code>, 'Chaîne dont la longueur maximale est fixée.'],
            [<code>TEXT</code>, 'Chaîne de caractères longue.'],
            [<code>DATE</code>, 'Date au format YYYY-MM-DD.'],
            [<code>TIME</code>, 'Heure au format HH:MM:SS.'],
            [<code>DATETIME</code>, 'Date et heure combinées.'],
          ]),
        },
        {
          id: 'operateurs',
          icon: '2',
          title: 'Opérateurs de comparaison',
          content: table(['Opérateur', 'Signification'], [
            [<code>=</code>, 'Égal à.'],
            [<code>&lt;&gt;</code>, 'Différent de.'],
            [<code>&gt; / &lt;</code>, 'Supérieur ou inférieur à.'],
            [<code>&gt;= / &lt;=</code>, 'Supérieur ou égal / inférieur ou égal.'],
            [<code>IN</code>, 'Présent dans une liste de valeurs.'],
            [<code>BETWEEN</code>, 'Compris dans un intervalle.'],
            [<code>LIKE</code>, 'Recherche selon un motif.'],
            [<code>IS NULL</code>, 'Recherche les valeurs NULL.'],
          ]),
        },
        {
          id: 'logique',
          icon: '3',
          title: 'Opérateurs logiques',
          content: <>{table(['Opérateur', 'Signification'], [
            [<code>AND</code>, 'Les deux conditions doivent être vraies.'],
            [<code>OR</code>, "Au moins une condition doit être vraie."],
            [<code>NOT</code>, 'Inverse le résultat de la condition.'],
          ])}{code("SELECT * FROM eleves\nWHERE note >= 10 AND classe = 'Terminale';")}</>,
        },
        {
          id: 'fonctions',
          icon: '4',
          title: "Fonctions d'agrégation",
          content: table(['Fonction', 'Description', 'Exemple'], [
            [<code>AVG(col)</code>, 'Calcule une moyenne.', <code>SELECT AVG(note) FROM eleves;</code>],
            [<code>COUNT(col)</code>, 'Compte les enregistrements.', <code>SELECT COUNT(*) FROM eleves;</code>],
            [<code>MAX(col)</code>, 'Retourne la valeur maximale.', <code>SELECT MAX(note) FROM eleves;</code>],
            [<code>MIN(col)</code>, 'Retourne la valeur minimale.', <code>SELECT MIN(note) FROM eleves;</code>],
            [<code>SUM(col)</code>, 'Additionne les valeurs.', <code>SELECT SUM(note) FROM eleves;</code>],
          ]),
        },
        {
          id: 'contraintes',
          icon: '5',
          title: 'Contraintes',
          content: <>{table(['Contrainte', 'Rôle'], [
            [<code>PRIMARY KEY</code>, 'Identifie chaque ligne de manière unique.'],
            [<code>FOREIGN KEY</code>, 'Relie une colonne à une autre table.'],
            [<code>NOT NULL</code>, 'Interdit une valeur vide.'],
            [<code>UNIQUE</code>, 'Interdit les doublons.'],
            [<code>DEFAULT</code>, 'Définit une valeur par défaut.'],
            [<code>CHECK</code>, 'Impose une condition sur la valeur.'],
          ])}{code('CREATE TABLE eleve (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  nom VARCHAR(60) NOT NULL,\n  email VARCHAR(120) UNIQUE,\n  note DECIMAL(4,2) CHECK (note BETWEEN 0 AND 20)\n);')}</>,
        },
        {
          id: 'ddl',
          icon: '6',
          title: 'DDL — définir la structure',
          content: <>{table(['Instruction', 'Rôle'], [
            [<code>CREATE DATABASE</code>, 'Crée une base de données.'],
            [<code>CREATE TABLE</code>, 'Crée une table.'],
            [<code>ALTER TABLE</code>, 'Modifie la structure d’une table.'],
            [<code>DROP TABLE</code>, 'Supprime une table.'],
          ])}{code('ALTER TABLE eleve\nADD classe_id INT;\n\nALTER TABLE eleve\nADD FOREIGN KEY (classe_id) REFERENCES classe(id);')}</>,
        },
        {
          id: 'dml',
          icon: '7',
          title: 'DML — manipuler les données',
          content: <>{code("INSERT INTO eleve (nom, prenom, note)\nVALUES ('Trabelsi', 'Amine', 15);\n\nSELECT nom, prenom, note\nFROM eleve\nWHERE note >= 10\nORDER BY note DESC;\n\nUPDATE eleve SET note = 18 WHERE id = 3;\n\nDELETE FROM eleve WHERE id = 3;") }<div className="note-box">Avant un UPDATE ou un DELETE, testez toujours votre condition avec un SELECT.</div></>,
        },
        {
          id: 'jointures',
          icon: '8',
          title: 'Jointures et regroupements',
          content: <>{code("SELECT c.nom AS classe, AVG(e.note) AS moyenne\nFROM eleve e\nINNER JOIN classe c ON c.id = e.classe_id\nGROUP BY c.nom\nHAVING AVG(e.note) >= 12\nORDER BY moyenne DESC;")}{table(['Clause', 'Utilisation'], [
            [<code>FROM</code>, 'Choisit la table source.'],
            [<code>JOIN</code>, 'Relie plusieurs tables.'],
            [<code>GROUP BY</code>, 'Regroupe les lignes similaires.'],
            [<code>HAVING</code>, 'Filtre les groupes après agrégation.'],
            [<code>ORDER BY</code>, 'Trie le résultat.'],
            [<code>LIMIT</code>, 'Limite le nombre de lignes.'],
          ])}</>,
        },
      ]}
      prev={{ to: '/js', label: 'JavaScript Rappel' }}
      next={{ to: '/php', label: 'PHP Rappel' }}
    />
  );
}
