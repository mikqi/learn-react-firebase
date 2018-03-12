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

## 3. Komponen dan Props

## 4. State dan lifecycles

## 5. Penanganan event

## 6. Rendering secara kondisional

## 7. List dan key

## 8. Forms