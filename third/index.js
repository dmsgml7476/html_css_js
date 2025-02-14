const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = document.getElementById("id");
  console.log(id.value);

  const pw = document.getElementById("pw");
  console.log(pw.value);

  const pw_c = document.getElementById("pw_c");
  console.log(pw_c.value);

  const bday = document.getElementById("bday");
  console.log(bday.value);

  if (id.value.length === 0) {
    alert("아이디를 입력하세요");
    id.focus();
    return;
  }
  if (pw.value.length === 0) {
    alert("비밀번호를 입력하세요");
    pw.focus();
    return;
  }
  if (pw_c.value.length === 0) {
    alert("비밀번호 확인을 입력하세요");
    pw_c.focus();
    return;
  }
  if (bday.value.length === 0) {
    alert("생년월일을 입력하세요");
    bday.focus();
    return;
  }

  if (pw.value !== pw_c.value) {
    alert("비밀번호가 동일하지 않습니다. 확인해주세요.");
    pw_c.focus();
    return;
  }

  if (pw.value.length <= 5) {
    alert("비밀번호를 6자리 이상 입력해주세요");
  }

  const message = "회원가입을 하시겠습니까?";
  if (confirm(message)) {
    alert("회원가입을 축하드립니다!");
  } else {
    alert("조금만 더 하면 되는데? 다시 해보세요");
  }
});
