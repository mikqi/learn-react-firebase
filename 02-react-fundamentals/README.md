# Dasar Pengetahuan tentang `React`

## 0. Ayo coba sendiri!

buka `try-me.html`

## 1. JSX

```
const element = <h1>Hello, world!</h1>;
```

Bukan html dan js. Syntax tersebut disebut dengan JSX

### Kenapa harus menggunakan JSX?

Hal ini ditujukan untuk membuat `separation of concern` dari komponen antar muka dan logic.

### Bagaimana cara memanggil syntax js didalam jsx?

```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

js dapat dipanggil dengan menggunakan kurung kurawal `{}`

### JSX dapat menjadi expression

Setelah kompilasi jsx akan menjadi js biasa. Dengan sifat ini kita bisa menggunakan jsx dalam sebuak kondisional atau loop

```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### Atribut dalam JSX

Atribut bisa di set dengan menggunakan kutip `"`

```
const element = <div tabIndex="0"></div>;
```

Bisa juga dengan menggunakan kurawal untuk mengakses variabel js

```
const element = <img src={user.avatarUrl}></img>;
```

### JSX Beranak

Komponen tanpa anak

```
const element = <img src={user.avatarUrl} />;
```

Komponen dengan anak

```
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

## 2. Rendering Element

Element merupakan blok terkecil dalam react

### Render sebuah element ke DOM

Anggap ada sebuah `<div>` pada halaman anda:

```
<div id="root"></div>
```

Kita akan menggunakan node DOM ini sebagai tempat kita untuk menggambar aplikasi kita.

Untuk me-render elemen react ke sebuah DOM node, kita bisa menggunakan kode ini

```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

### React hanya meng-update saat dibutuhkan

React akan membandingkan keadaan state dengan keadaan sebelumnya dan hanya mengubah DOM node yang terkait.

## 3. Komponen dan Props

Komponen memungkinkan anda memecah antar muka menjadi potongan yang dapat digunakan kembali. Kemudian mengisolasi komponen tersebut.

Dalam konsepnya, komponen mirip dengan sebuah fungsi di javascript. Mereka menerima input (yang disebut `props`) dan mengembalikan react element

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Kode diatas biasa disebut `functional component` karena berupa fungsi yang menerima props dan mengembalikan element.

Kita juga dapat mendeklarasikan dengan menggunakan `ES6 Class`

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Render sebuah komponen

Setelah mengetahui bentuk komponen, kita bisa melakukan render komponen pada node DOM dengan cara seperti ini:

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Yang dapat kita pelajari dari contoh diatas adalah:

1.  Kita memanggil `ReactDOM.render()` dengan element `<Welcome name="Sara" />` element.
2.  React memanggil komponen Welcome dengan props berupa `{name: 'Sara'}`.
3.  Komponen Welcome mengembalikan sebuah element `<h1>Hello, Sara</h1>` sebagai hasil.
4.  React mengupdate root DOM menjadi `<h1>Hello, Sara</h1>`.

### Kombinasi Komponen

Komponen dapat merujuk ke komponen lain dalam outputnya. Ini memungkinkan kita menggunakan abstraksi komponen yang sama untuk setiap tingkat detail. Sebuah tombol, sebuah bentuk, sebuah dialog, sebuah layar: di aplikasi React semua itu biasanya dinyatakan sebagai komponen.

Sebagai contoh, kita akan membuat sebuah komponen yang menggambar `Welcome` berulang kali:

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Biasanya, aplikasi React baru memiliki satu komponen App di bagian paling atas. Namun, jika Anda mengintegrasikan React ke aplikasi yang ada, Anda mungkin mulai dari bawah ke atas dengan komponen kecil seperti Button dan secara bertahap melanjutkan ke tampilan yang lebih atas.

### Ekstraksi komponen

Komponen dapat dipecah menjadi komponen komponen kecil
Sebagai contoh berikut merupakan contoh komponen `Comment`

```
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Komponen diata menerima `author` (object), `text` (string), dan `date` (date) sebagai props.

Komponen ini bisa sulit dipecah karena komponen yang beranak. Mari kita ekstrak beberapa komponen dari komponen diatas.

Pertama kita akan mengekstract komponen `Avatar`

```
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  );
}
```

`Avatar` tidak perlu tahu apa yang akan di render `Comment`. Inilah sebabnya mengapa nama propnya lebih umum yaitu, `user` dan bukan `Author`. Oleh karena itu direkomendasikan untuk menggunakan nama props yang sesuai dengan sudut pandang komponen.

```
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Kemudian meringkasnya lagi mmenjadi seperti ini

```
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

Dan pada akhirnya

```
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

### Props adalah Read-Only

Seluruk komponen React harus memiliki sifat seperti `pure functions` terhadap props yang dimilikinya.

## 4. State dan lifecycles

Kita akan menggunakan komponen dibawah pada bagian ini

```
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

Pada bagian ini, kita akan belajar bagaimana membuat komponen `Clock` benar-benar dapat digunakan kembali dan dienkapsulasi. Komponen ini akan memiliki timer sendiri dan mengupdate dirinya sendiri setiap detiknya.

Kita akan mulai dengan mengenkapsulasi tampilan komponen terlebih dahulu.

```
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

Idealnya kita berharap dapat menggunakan komponen `Clock` seperti ini

```
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

Untuk implementasinya, kita akan menambahkan `state` pada komponen `Clock`.
State mirip dengan props, hanya saja state terisolaso didalam komponen dan hanya bisa diakses dalam komponen itu sendiri.

### Konversi Fungsi menjadi sebuah class

Kita dapat mengubah komponen fungsional `Clock` menjadi class dalam lima langkah:

1. Membuat sebuah class `ES6` dengan me-extend `React.Component`
2. Menambahkan satu fungsi kosong bernama `render`
3. Memindahakan body dari komponen pada fungsi render tersebut
4. Mengganti `props` menjadi `this.props`
5. Hapus fungsi kosong yang sudah dipindahkan

```
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

## 5. Penanganan event

## 6. Rendering secara kondisional

## 7. List dan key

## 8. Forms

```

```
