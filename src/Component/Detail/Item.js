import React from 'react'

export default class DetailItem extends React.Component {

  renderButtons() {
    const { isEditing, onSave, onEdit, onDelete } = this.props
    const buttons = []

    if(isEditing) {
      buttons.push(<div key="save" type="submit" className="button button--positive" onClick={onSave}>Save</div>)
    } else {
      buttons.push(<div key="edit" className="button" onClick={onEdit}>Edit</div>)
    }

    buttons.push(<div key="delete" className="button button--negative" onClick={onDelete}>Delete</div>)

    return buttons
  }

  render() {
    const { isEditing } = this.props

    const {fields: {fullName, bio, tel, email}} = this.props;

    return (
      <div className="item">
        <form>
          <div className="item__header">
            <div className="profile-pic"></div>
            {/*<div className="name">Patrik Vrbovsky</div>*/}
            <input className="name" type="text" name="" placeholder="Full Name" disabled={!isEditing} {...fullName} />
          </div>
          <div className="item__content">
            <div className="input-wrap">
              <label htmlFor="bio">Bio</label>
              {/*<div className="bio">Some bio</div>*/}
              <textarea name="bio" className="bio" placeholder="Decsription" disabled={!isEditing} {...bio} />
            </div>
            <div className="input-wrap">
              <label htmlFor="tel">Phone</label>
              {/*<div className="tel">+420 777 888 999</div>*/}
              <input type="text" name="tel" className="tel" placeholder="+XXX XXX XXX XXX" disabled={!isEditing} {...tel} />
            </div>
            <div className="input-wrap">
              <label htmlFor="email">E-mail</label>
              {/*<div className="email">some@email.com</div>*/}
              <input type="text" className="email" placeholder="E-mail" disabled={!isEditing} {...email}/>
            </div>
          </div>
          <div className="item__footer">
            {this.renderButtons()}
          </div>
        </form>
      </div>
    )
  }
}
