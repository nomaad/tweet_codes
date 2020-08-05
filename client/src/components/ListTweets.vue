<template>
  <div class="row">
    <div class="col-12">
    <div class="row">
      <div class="col-12">
        <div class="shadow p-3 mb-5 mt-5 bg-light rounded">
          <p><i>Tweet:</i></p>
          <h5>"Level 14 der #CoronaWarnApp entpuppt sich bei mir als wahrer Endgegner. Seit Tagen hänge ich in dem Level."</h5>
          <div class="row">
            <div class="col-12">
              <hr />
            </div>
            <div class="col-4">
              <button type="button" class="btn btn-primary btn-lg ">Previous</button>
            </div>
            <div class="col-4">
              <input class="form-control form-control-lg" type="text" placeholder="Enter Code">
            </div>
            <div class="col-4">
              <button type="button" class="btn btn-primary btn-lg float-right">Save &amp; Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <hr style="">
        <h5>Coding Scheme:</h5>
        <table class="table table-striped">
          <tr>
            <th scope="row">0</th>
            <td><b>N/A</b></td>
            <td>The tweet content does not match any of the codes.</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td><b>Solutionist</b></td>
            <td>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><b>Covidiot</b></td>
            <td>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
