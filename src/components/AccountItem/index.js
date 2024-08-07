import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://media.istockphoto.com/id/517188688/vi/anh/phong-c%E1%BA%A3nh-n%C3%BAi-non.jpg?s=612x612&w=0&k=20&c=WWWaejSo6EWGZMZSK7QK6LCfwd0rL2KB3ImCX2VkW4A="
        alt="Thúy"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Phạm Thanh Thúy</span>
          <FontAwesomeIcon
            className={cx('check')}
            icon={faCheckCircle}
          />
        </h4>
        <span className={cx('username')}> abc</span>
      </div>
    </div>
  );
}

export default AccountItem;
