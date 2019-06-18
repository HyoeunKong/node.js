function Person(name, email, comments) {
    this.name = name;
    this.email = email;
    this.comments = comments;

}


let p;

$(document).ready(function () {



    $("#contact_button_handler").click(function () {

        const name = $("#name").val();
        const email = $("#email").val();
        const comments = $("#comments").val();

        p = new Person(name, email, comments);

        $("#send_div").html("<h1>" + p.name + "환영합니다.</h1>");

        $.post("http://70.12.50.51:3000/member_insert",
            {
                name: p.name,
                email: p.email,
                comments: p.comments
            }, //jquer가 객체를 text 형태로 바꾸어서 서버단으로 보내준다.

            function (data, status) {

                alert(JSON.parse(data).msg);


            });
    });



});

