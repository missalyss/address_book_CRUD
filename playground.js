<form class="form-group" action="/contacts/edit{{id}}?_method=PUT" method="post">
{{> new }}




<form class="form-group" action="/address" method="post">

    <label for="line_1">Line 1:</label>
    <input class="form-control" id="line_1" type="text" name="line_1" placeholder="Line 1" value="{{line_1}}"></br>

    <label for="line_2">Line 2:</label>
    <input class="form-control" id="line_2" type="text" name="line_2" placeholder="Line 2" value="{{line_2}}"></br>

    <label for="city">City:</label>
    <input class="form-control" id="city" type="text" name="city" placeholder="City" value="{{city}}"></br>

    <label for="zip">Zip:</label>
    <input class="form-control" id="zip" type="text" name="zip" placeholder="Zip" value="{{zip}}"></br>

  <button type="submit" class="btn btn-primary">Submit</button>

</form>
