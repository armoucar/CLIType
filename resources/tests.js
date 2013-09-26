test( "CLIType exists", function() {
  ok( CLIType );
});

test("should return 5 span labels", function() {
  var letters = CLIType.transformToSpans("hello");

  ok( letters.length === 5 );
  ok( letters[0].innerHTML === "h" );
  ok( letters[1].innerHTML === "e" );
  ok( letters[2].innerHTML === "l" );
  ok( letters[3].innerHTML === "l" );
  ok( letters[4].innerHTML === "o" );
});


test("append letters on body", function() {
  CLIType.go(".clitype");

  var content = document.querySelector(".clitype");
  ok(content.children.length === 10);
});
