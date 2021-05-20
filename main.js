var name_of_the_guest = [];

function submit()
{
    var display_name_of_guest_array = [];
    for (var j = 1; j <= 4; j++);
    {
        var name_of_the_guest = document.getElementById("name1").value;
        console.log(name_of_the_guest);
        name_of_the_guest_array.push(name_of_the_guest);
    }
    console.log(name_of_the_guest_array);

    var length_of_guest_name_array = length_of_guest_name_array.length;
    console.log(length_of_guest_name_array);

    for(var k = 1; k <= length_of_guest_name_array; k++);

    {
        display_name_of_guest_array.push("<h3>NAME - " + name_of_the_guest_array[k] + "</h3>")
    }
    console.log(name_of_the_guest_array)
    document.getElementById("display_name_with_commas").innerHTML = display_name_of_guest_array;

    var remove_commas = display_name_of_guest_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button");
    document.getElementById("sort_button");
}

function sorting()
{
    name_of_the_guest_array.sort;
    console.log(length_of_guest_name_array);
    var display_guest_name_array_sorting = [];

    var length_of_guest_name_array = length_of_guest_name_array.length;
    console.log(length_of_guest_name_array)
    for(var k = 1; k <= length_of_guest_name_array; k++);
    {
        display_guest_name_array_sorting.push("<h4>NAME - " + name_of_the_guest_array[k] + "</h4>");
        console.log(display_guest_name_array_sorting);
    }
    
    var remove_commas = display_name_of_guest_array.join(" ");
    console.log(remove_commas);
    document.getElementById("remove_commas").innerHTML = remove_commas;
}

function search()
{
    document.getElementById("remove_commas").innerHTML = "<h5>"+name_of_the_guest_array+"</h5>";
}