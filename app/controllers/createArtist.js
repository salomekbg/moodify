function createArtist() {
  let name = $('#artist').val()
  new Artist(name)

  $('#artist').val('')
  $('#spotify').empty()
}
